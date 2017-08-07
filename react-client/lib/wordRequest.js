var wordRequest = ({ key, max = 25, query }, callback) => {
  $.ajax({
    type: 'GET',
    url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&',
    data: {
    	key: key,
    	maxResults: max,
    	q: query,
      part: 'snippet'
    },
    dataType: 'json',
    success: function(data) {
      callback(data.items)
    },
    error: function(e) {
       console.log('error', e);
    }
  });
};
window.wordRequest = wordRequest;