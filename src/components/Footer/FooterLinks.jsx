export default function FooterLinks({title,children,width}) {
  return (
    <div className={`Footer-links mt-4 w-full ${width ? `xs2:w-[285px]`: ''} lg:w-full`}>
          <h3 className="Footer-links__title text-[18px] font-bold">
            {title}
          </h3>
          <ul className="Footer-links-list mt-[2.6rem] flex flex-col gap-[2.2rem]">
            {children}
          </ul>
        </div>
  )
}
