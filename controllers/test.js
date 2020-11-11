console.log("Hey")
exports.func1 = function(req,res)
{
    console.log("hi")
  var sum=1+2;
  console.log(sum);
  res.send
  {
      sum:sum;
  }

}