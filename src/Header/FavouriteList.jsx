import  heart from '../assets/heart.svg'
function FavouriteList() {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
    <img src={heart} alt="" />
    <span>Favourite Locations</span>
</div>

  )
}

export default FavouriteList
