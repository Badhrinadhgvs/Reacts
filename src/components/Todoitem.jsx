function Avail({todo,date})
{
  
  return <div>
    <div class="container text-center btn-del">
          <div class="row">
            <div class="row">
              <div class="col-6">
                {todo}
              </div>
              <div class="col-4">
                {date}
              </div>
              <div class="col-2">
                <button type="button" className="btn btn-danger btn-del-a ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        
  </div>
}

export default Avail;