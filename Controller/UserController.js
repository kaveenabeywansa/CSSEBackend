var mongoose = require('../DBSchema/DBConfig');
var UserSchema = mongoose.model('User');

var Controller = function () {
    this.addUser = function (data) {
        return new Promise(function (resolve, reject) {
            var user = new UserSchema({
                nic: data.nic,
                fname: data.fname,
                lname: data.lname,
                phone: data.phone,
                email: data.email,
                password: data.password,
                amount: data.amount
            });
            user.save().then(function () {
                resolve({ status: 200, message: "User Added Successfully..... !" });
            }).catch(function (err) {
                reject({ status: 500, message: "Error: " + err });
            })
        });
    }
    this.getAll = function () {
        return new Promise(function (resolve, reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({ status: 200, userdata: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    }
    this.searchUser = function (nic) {
        return new Promise(function (resolve, reject) {
            UserSchema.find({ nic: nic }).exec().then(function (data) {
                resolve({ status: 200, userSearch: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

    this.updateUser = function (nic, body) {
        return new Promise(function (resolve, reject) {
            UserSchema.update({ nic: nic }, body).then(function (data) {
                resolve({ status: 200, userUpdated: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

};

module.exports = new Controller();