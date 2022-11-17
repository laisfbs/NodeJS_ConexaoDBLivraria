import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
	{
		id: {type: String},
		titule: {type: String, require:true},
		autor: {type: String, require:true}	
	});

	const livros = mongoose.model('livros', livroSchema);

	export default livros;