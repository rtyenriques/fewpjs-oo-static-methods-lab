class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    // return string.replace(/[^A-Za-z0-9-'])+/g,'');
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');

  }
  static titleize(string){
    // return string.toUpperCase(/[^a anbut of andforatbyfrom]+/g, '')
    let newS = string.split(' ');
    let k = newS.map(function(a) {
      return a.capitalize
    })
    return k.join()
  }
}