import editIcon from './../../../assets/icons/edit-icon.svg';
import AdminMenuOption from "./option-component";

export default function AdminMenu() {
    const options = [
        {
            title: 'Gerenciar produtos',
            details: 'Adicione, remova ou edite produtos',
            route: '/admin/products'
        },
        {
            title: 'Gerenciar usuários',
            details: 'Adicione, remova ou edite usuários',
            route: '/admin/users'
        },
        {
            title: 'Gerenciar Página Principal',
            details: 'Personalize a página principal de acordo com as novidades e promoções',
            route: '/admin/users'
        },
        {
            title: 'Gerenciar categorias',
            details: 'Adicione, remova ou edite categorias',
            route: '/admin/categories'
        }
    ]
    return (
        <div className={'w-full h-full flex flex-col mb-12'}>
            <div
                className={'w-full h-[100px] items-center justify-center text-center flex font-bold lg:text-[50px] xs:text-[30px]'}>
                Bem-vindo {localStorage.getItem('username')}
            </div>
            <div
                className={'w-full sm:px-8 xs:px-2 flex-col gap-5 h-full items-center justify-center flex  lg:inline-flex xs:flex-col'}>
                {options.map((option, index) => (
                    <AdminMenuOption key={index} icon={editIcon} route={option.route} title={option.title} details={option.details}/>
                ))}
            </div>
        </div>
    )
}