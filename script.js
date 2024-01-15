class User {
    constructor(_firstName, _lastName, _age, _location){
       this.firstName = _firstName;
       this.lastName = _lastName;
       this.age = _age;
       this.location = _location;
    }
 
    ageDiff(name){
       if(this.age > name.age){
          console.log(`${this.firstName} è più giovane di ${name.firstName}`); 
       }else if(this.age < name.age){
          console.log(`${this.firstName} è più giovane di ${name.firstName}`);
       }else{
          console.log(`${this.firstName} e ${name.firstName} sono la stessa persona, con i nomi scritti al contrario`);
       }
    }
 }
 let adriano= new User('Adriano','Bruzzese',32,'Bari');
 let onairda= new User('Onairda','Esezzurb',23,'Beri');
 adriano.ageDiff(onairda);
 
 class Pet{
    constructor(_name,_owner,_species,_breed){
       this.name = _name;
       this.owner = _owner;
       this.species = _species;
       this.size = _size;
    }
    sameOwner(pet){
       if(this.owner === pet.owner){
          return true;
       }else{
          return false;
       }
    }
 }
 
 
 document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let petName= document.querySelector('#pet-name');
    let petOwner= document.querySelector('#pet-owner');
    let petSpecies= document.querySelector('#pet-species');
    let petSize= document.querySelector('#pet-size');
    let newPet = new Pet(petName.value,petOwner.value,petSpecies.value,petSize.value);
    console.table(newPet);
    petName.value='';
    petOwner.value='';
    petSpecies.value='';
    petSize.value='';
 })