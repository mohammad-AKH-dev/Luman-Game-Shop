export default function Input({title,Change,Value,name,children,type}) {
  return (
    <>
      <label htmlFor="name">
        {title} {<span className="text-red-600">*</span>}
      </label>
      <div className="input-wrapper my-4 rounded-xl focus-within:border-[#ffffff59] border relative p-[6px] border-[#ffffff3b]">
         <input type={type} className={`input-form ${children ? 'w-[220px]' : 'w-full'} text-[14px]
          bg-primary outline-none`}/>
         {children}
      </div>
    </>
  );
}
