import User from '../models/user.js'

export const searchUser = async (params={}) => {
    const users = await User.find(params).exec();
    return users;
}

export const saveUser = async (newUser)=>{
    const user = new User(newUser);
    return await user.save();
}

export const updateUser = async(updatedUser,id)=>{
    const user = await User.findByIdAndUpdate(id,updatedUser).exec();
    return user;
}

export const removeUser = async(id)=>{
    return await User.findByIdAndDelete(id).exec();
}