const { Router }  = require('express')
const router = Router()
const { handleSignIn , handleSignUp } = require('../Controllers/User')
const {updateInfo} = require('../Controllers/UpdateInfo')
const {deleteUser} = require('../Controllers/DeleteUser')



router.get('/signin', handleSignIn)
router.post('/signup', handleSignUp)
router.put('/update', updateInfo)
router.delete('/delete', deleteUser)

module.exports = router 
  