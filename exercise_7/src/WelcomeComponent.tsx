
interface WelcomeData {
  username: string,
  isPremium: boolean
}
 type welcome = {
    username: string,
  isPremium: boolean
 }
const WelcomeComponent = ({username , isPremium } : welcome) => {
  return (
    <div>
      <h2>Welcome component</h2>
       {isPremium  ? `welcome premium User:! ${username}` : "welcome : Guest"}
    </div>
  )
}

export default WelcomeComponent
