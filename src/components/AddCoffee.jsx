const AddCoffee = () => {
    return (
        <div>
            <h1>add a coffee</h1>
            <form>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>name</span>
                            <input type="text" placeholder="Coffee name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;