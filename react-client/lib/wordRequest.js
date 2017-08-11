var wordRequest = ({ key, max = 25, query }, callback) => {
  $.ajax({
    type: 'GET',
    url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=700&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=25&'+key,
    success: (data) => {
        console.log('data', data);
        data = Utilities.randomize(data);
        data = this.colorize(data);
        this.setState({
          board: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
  });
};
window.wordRequest = wordRequest;