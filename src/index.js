module.exports = function check(str, bracketsConfig) {
  var open = [];
  var close = [];
  var i,j = 0;
  var check = 0;
  var tmp = [];
  for(i=0; i<bracketsConfig.length;i++){
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  }
 // console.log(open);
 // console.log(close);
  for (i=0; i<str.length;i++){
    for(j=0;j<open.length; j++){
      if(str[i]==open[j]){
      //  console.log(str[i]);
        tmp.push(j);
        //console.log(tmp);
        check ++;
      }
      if(str[i]==close[j]){
       // console.log(str[i]);
        if(j==tmp.pop()){
          check--;
        }
        else return false;
      }
    }
   // console.log('current check=' , check);
    if(check<0) return false;
  }
  //console.log('check =' , check);
  if(check == 0) return true;
  else return false;
}
