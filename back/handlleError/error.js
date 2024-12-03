
const handleError = (err, res) => {
     return res.status(500).json({
       error: err.message || err,
     });
   };
   

   const validateEmptyObject = (obj, res, message) => {
     if (Object.keys(obj).length === 0) {
       return res.status(404).json({
         msg: message || "Object not found",
       });
     }
   };
   const validateEmptyArray = (array, res, message) => {
     if (Object.keys(obj).length === 0) {
       return res.status(404).json({
         msg: message || "Objects not found",
       });
     }
   };
   
module.exports = {handleError,validateEmptyObject,validateEmptyArray};