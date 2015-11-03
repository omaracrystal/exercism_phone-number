(function Number() {

  'use strict';

  function PhoneNumber (phone) {
    this.phone = phone;
    this.cleanPhone = "";
  }

  PhoneNumber.prototype.number = function(){
    return this.firstDigitOne();
  };

  PhoneNumber.prototype.clean = function () {
    //remove all non-digit chars
    var cleanPhone = this.phone.replace(/[^\d]/g,'');
    this.cleanPhone = cleanPhone;
  };

  PhoneNumber.prototype.firstDigitOne = function () {
    this.clean();
    if(this.cleanPhone.length === 11) {
      if (this.cleanPhone[0] === "1") {
        var str = this.cleanPhone;
        var result = str.slice(1, str.length);
        return result;
      } else {
        return '0000000000';
      }
    } else if (this.cleanPhone.length > 11 || this.cleanPhone.length < 10) {
      return '0000000000';
    } else {
      return this.cleanPhone;
    }
  };

  PhoneNumber.prototype.areaCode = function () {
    this.firstDigitOne();
    var str = this.cleanPhone;
    var area = str.substring(0, 3);
    return area.toString();
  };

  PhoneNumber.prototype.toString = function () {
    this.firstDigitOne();
    var str = this.cleanPhone;
    var area = str.substring(0, 3);
    var middle = str.substring(3, 6);
    var last = str.substring(6, 10);
    return '(' + area + ')' + ' ' + middle + '-' + last;
  };


module.exports = PhoneNumber;

})();
