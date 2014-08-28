
var api={};
exports.handleAPI=function(req,res){
    api[req.params.api](req,res);
    console.log("api handle")
};


//api 설정
//tmpl_api
api.test_insert=function(req,res) {

    var param = {};
    param.value = {test:req.body.test_value}
    global.client.query("INSERT INTO tablename SET ?",  param.value, function (err, rows, result) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.send("insert complete")
    })
};

api.test_select=function(req,res) {
    var uquery="select * from tablename";
    global.client.query(uquery,function(err,row,result) {
        if(err){
            console.error(err);
            throw err;
        }else{
            res.json(row)
        }
    })
};

api.test_delete=function(req,res) {
    var param_id = req.body.test_value;
    global.client.query("delete from tablename where test_id = '" + param_id + "'", function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.send("error");
        } else {
            console.log("rows >>> " + rows.length);
            res.json("delete");
        }
    });
};


api.test_update=function(req,res) {
    var idparam = req.body.test_id;
    var valuepara = req.body.test_value
    global.client.query("update tablename set fieldname1 ='" + valuepara + "' where flielname2 = '" + idparam + "'", function (err, rows, fields) {    //fieldname1 = update field
        if (err) {
            console.log(err)
            res.send("error");
        } else {
            console.log("rows >>> " + rows.length);
            res.json("update");
        }

    });
}




