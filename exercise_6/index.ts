//  1 enum

enum userRole {
    admin= 'superAdmin',
    moderator =  ' moderator',
    viewer = 'viewer'
}

function canEdit ( role : userRole){
    if(role === userRole.viewer){
        return false
    }else{
        return true
    }
}

console.log(canEdit(userRole.viewer))
console.log(canEdit(userRole.admin))
console.log(canEdit(userRole.moderator))

// as

let button = document.querySelector('button') as HTMLButtonElement
button.disabled = true