import { checkUser } from '@/lib/checkUser'
import Header from './header'

const HeaderWrapper = async () => {
  // Call checkUser on server side
  await checkUser();
  
  return <Header />
}

export default HeaderWrapper 