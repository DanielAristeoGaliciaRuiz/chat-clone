const usersServides=require('./users.services.js')

const router=require('express').Router()

router.get('/',usersServides.getAllUsers)

router.post('/',usersServides.postNewUser)

router.get('/:id',usersServides.getUserById)

router.patch('/:id',usersServides.patchUser)

// router.put('/:id',usersServides.putUser)

router.delete('/:id',usersServides.deleteUser)

module.exports=router
