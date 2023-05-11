// All Fields
const allFieldsValidate = (values) => {

}

// Full name Input
const fullNameValidate = (error = {}, value) => {
    if (!value.fullName){
        error.fullName = toast.error('fullName Required...!');
    }
}

// Email Input

// Mobile | Phone Number Input