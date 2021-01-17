const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    })
}
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('TRUE')
            }, 2000);
        } else {
            const error = new Error('c murio');
            reject(error);
        }
    })
}
somethingWillHappen2()
.then(response=>console.log(response))
.catch(err=>console.error(err))

//Multiles promesas,Promise.all():recibe como parametro un arreglo de promesas.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response =>console.log(response))
    .catch(error => console.error(error))