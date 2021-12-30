
const userSchema = new mongoose.Schema({
    
        // “_id” – Primary Key
        // “username” – String, Unique Index
        // “hash” – String,
        // “email” – String,
        // “email_verified” – Boolean,
        // “created_at” – Date/Time,
        // “updated_at” – Date/Time
        
});
//Check if email is taken
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//business logic
};
// Check if password matches the user's password
userSchema.methods.isPasswordMatch = async function (password) {
//business logic
};
//save the profile
userSchema.pre('save', async function save(next) {
});
//user methods

