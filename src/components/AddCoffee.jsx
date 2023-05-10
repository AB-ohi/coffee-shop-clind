const AddCoffee = () => {

    const handelAddCoffee = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.Supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const Photo = form.Photo.value;
        const newCoffee = {name,quentity,supplier,taste,category,details,Photo,}

        console.log(newCoffee)
        fetch('http://localhost:3000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json',
            },
            body:
        })

        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error => console.log(error))


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1>add a coffee</h1>
            <form onSubmit={handelAddCoffee}>
                {/*name row */}
                <div className="md:flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>name</span>
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quentity" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/*Supplier row */}
                <div className="md:flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="Supplier" placeholder="Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">taest</span>
                        </label>
                        <label className="input-group">
                            <span>teast</span>
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/*Category row */}
                <div className="md:flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name="category" placeholder="Coffee name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/*Category row */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" name="Photo" placeholder="Enter photo URL" className="input input-bordered" />
                        </label>
                    </div>
                    <input type="submit" value="add coffee" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;