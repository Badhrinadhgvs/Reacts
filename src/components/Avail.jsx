function Avai()
{
  let todo='Buy Milk'
  let date='4/10/2023'
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
                <button type="button" class="btn btn-danger btn-del-a ">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        
  </div>
}

export default Avai;