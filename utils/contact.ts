
export const isValidName = (name:string) => {
    const match = String(name)
      .toLowerCase()
      .match(/^[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/);
  
      return !!match;
  };
  
  export const isValidEmail = (email:string) => {
    
      const match = String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    
        return !!match;
    };
    
    export const isEmail = (email:string) => {
      return isValidEmail(email) 
        ? undefined
        : 'Debe ser un correo válido';
    };