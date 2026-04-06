import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [msg, setMsg] = React.useState('');


const loginUser = async () => {
  try {
    if (!email || !password) {
      setMsg("يرجى ملء جميع الحقول");
      return;
    }

    const res = await axios.post("http://localhost:5500/login", { 
      email, 
      password 
    });

    console.log(res.data);

    if (res.data.state === 1) {
      // 🔥 تخزين user
      localStorage.setItem("userId", res.data.data._id);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      // تسجيل دخول
      localStorage.setItem("login", true);
            setMsg('');
      navigate('/main');
    } else {
      setMsg(res.data.msg);
    }

  } catch (err) {
    console.log(err);
    setMsg("حدث خطأ ❌");
  }
};

    return (
        <>

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        مدونتي
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <p className='text-red-600 text-center text-lg'>{msg}</p>

                            <h1 dir='rtl' className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                سجل دخولك الى حسابك
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label dir='rtl' htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني</label>
                                    <input dir='rtl' type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={e => setemail(e.target.value)} />
                                </div>
                                <div>
                                    <label dir='rtl' htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور</label>
                                    <input dir='rtl' type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input dir='rtl' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">تذكرني</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">نسيت كلمة المرور؟</a>
                                </div>
                                <button type="button" className="w-full text-white bg-blue-800 hover:bg-blue-500 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={loginUser}>
                                    تسحيل الدخول
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ليس لديك حساب بعد؟ <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">إنشاء حساب</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
