class Apierror extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        stack,error
    ){
this.statuscode=statuscode,
this.message=message,
this.data=null,
this.error=error
if(stack){
this.stack=stack
}else{
    Error.captureStackTrace(this,this.constructor)
}
    }
}
export default Apierror