let BASE_URL =''
if(process.env.NODE_ENV === 'development'){
   BASE_URL = 'http:'

}else if (process.env.NODE_ENV === 'production'){
    BASE_URL = ''
}else {
    BASE_URL = ''
}

export {BASE_URL}