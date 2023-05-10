import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {_id, name, quantity, supplier, taste, category, details, Photo } = coffee;


  const handelDelete = id =>{
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
            fetch(`http://localhost:3000/coffee/${id}`,{
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    
                    Swal.fire(
                        'info!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })

        }
      })
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={Photo} />
      </figure>
      <div className="flex w-full justify-between px-7">
        <div>
        <h2 className="card-title">Name: {name}!</h2>
        <p>quantity: {quantity}</p>
        <p>supplier: {supplier}</p>
        <p>taste: {taste}</p>
        <p>category: {category}</p>
        <p>details: {details}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-5">
          <button className="btn">View</button>
          <button className="btn">Edit</button>
          <button onClick={()=> handelDelete(_id)} className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
