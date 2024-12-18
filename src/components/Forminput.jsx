export default function FormInput({title,Change,Value,name,children,type,style}) {
  return (
    <>
      <label htmlFor="name" className="text-[#FFFFFF99]">
        {title} {<span className="text-red-600">*</span>}
      </label>
      <div className={`input-wrapper ${style ? style : ''} my-4 rounded-xl focus-within:border-[#ffffff59] border relative p-[6px] border-[#ffffff3b]`}>
         <input type={type} className={`input-form ${style ? style : ''} ${children ? 'w-[90%]' : 'w-full'} text-[14px]
          bg-primary outline-none`}/>
         {children}
      </div>
    </>
  );
}
