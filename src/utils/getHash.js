const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    //Se trae el elemento 1 del sig array ['','1','']
export default getHash;