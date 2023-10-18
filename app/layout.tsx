
import './globals.css'

 export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <html lang ="en">
    <body className='bg-gradient-to-r from-[#6B3580] to-[#169970]'>{children}</body>
    </html>
  )
}
 