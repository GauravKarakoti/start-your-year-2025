class Reptile2 extends Animal {
	private genus: string;
	public species: string;
	public classification: string;
	constructor(name: string, genus: string | undefined, species: string | undefined) {
	  super(name);
	  if (genus === undefined || species === undefined) {
		throw new Error("No species added.", { cause: "Invalid input." });
	  } else {
		this.genus = genus;
		this.species = species;
	  }
	  this.classification = "Reptilia";
	}
	getSpecies() {
	  console.log(`${this.genus} ${this.species}`);
	}
  }
  
  const crocodile2 = new Reptile2("Angel", "Crocodylus", "novaeguineae");
//   console.log(crocodile2.#genus); // this will error. experiment by removing this line.
  crocodile.getSpecies();