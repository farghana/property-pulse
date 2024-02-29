import '@/assets/styles/global.css'

export const metadata = {
    title: "Property Pulse | Find your dream rental property",
    description: 'Find your dream rental property|',
    keywords: 'rental| dream rentals| available properties'
}

const MainLayout = ({children}) => {
  return (
      <html lang='en'>
        <body>
            {children}
        </body>
      </html>
  )
}

export default MainLayout
