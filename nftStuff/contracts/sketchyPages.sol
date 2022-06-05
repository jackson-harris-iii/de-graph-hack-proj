contract SketchyPages is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string baseURI;
  uint256 public requiredAmount = 3;
  uint256 public maxCharLimit = 200;
  bool public paused = false;
  string public notRevealedUri;
  address public sabcAddress;

  struct Page { 
      string message;
   }

  mapping (uint256 => Page) public pages;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    string memory _initNotRevealedUri,
    address _initsabcAddress
  ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    setNotRevealedURI(_initNotRevealedUri);
    setsabcAddress(_initsabcAddress);
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function claim() public {
    require(!paused, "Contract is paused");
    IERC721 token = IERC721(sabcAddress);
    uint256 ownedAmount = token.balanceOf(msg.sender);
    require(ownedAmount >= requiredAmount, "You don't own enough SABC NFTs");
    uint256 supply = totalSupply();
    require(supply + 1 <= 30000, "Max supply reached");
    Page memory newPage = Page("");
    pages[supply + 1] = newPage;
    _safeMint(msg.sender, supply + 1);
  }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
      require(_exists(_tokenId),"ERC721Metadata: URI query for nonexistent token");
        Page memory currentPage = pages[_tokenId];
        if(bytes(currentPage.message).length > 0) {
            return _baseURI(); 
        }
        else {
             return notRevealedUri;
        }
  }

  function setMessage(uint256 _tokenId, string memory _newMessage) public {
    require(msg.sender == ownerOf(_tokenId), "You are not the owner of this NFT.");
    bytes memory strBytes = bytes(_newMessage);
    require(strBytes.length <= maxCharLimit, "Message is too long.");
    Page storage currentPage = pages[_tokenId];
    currentPage.message = _newMessage;
  }

   function readMessage(uint256 _tokenId) public view returns (string memory message){
    Page memory currentPage = pages[_tokenId];
    return currentPage.message;
  }

  //only owner
  function setsabcAddress(address _newAddress) public onlyOwner {
    sabcAddress = _newAddress;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function setRequiredAmount(uint256 _newValue) public onlyOwner {
    requiredAmount = _newValue;
  }

  function setMaxCharLimit(uint256 _newValue) public onlyOwner {
    maxCharLimit = _newValue;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }
 
  function withdraw() public payable onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }
}