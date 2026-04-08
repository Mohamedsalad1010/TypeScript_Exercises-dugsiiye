"use strict";
//  1 enum
var userRole;
(function (userRole) {
    userRole["admin"] = "superAdmin";
    userRole["moderator"] = " moderator";
    userRole["viewer"] = "viewer";
})(userRole || (userRole = {}));
function canEdit(role) {
    if (role === userRole.viewer) {
        return false;
    }
    else {
        return true;
    }
}
console.log(canEdit(userRole.viewer));
console.log(canEdit(userRole.admin));
console.log(canEdit(userRole.moderator));
