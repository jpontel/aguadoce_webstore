import editIcon from './../../../assets/icons/edit-icon.svg';
import AdminMenuOption from "./option-component";

export default function AdminMenu() {
    const options = [
        {
            title: 'Gerenciar produtos',
            details: 'Adicione, remova ou edite produtos',
            route: '/admin/manage-products',
            actions: [
                { label: 'Adicionar', type: 'add', route: '/admin/manage-products/add' },
                { label: 'Editar', type: 'edit', route: '/admin/manage-products/edit' },
                { label: 'Deletar', type: 'delete', route: '/admin/manage-products/delete' }
            ]
        },
        {
            title: 'Gerenciar usuários',
            details: 'Adicione, remova ou edite usuários',
            route: '/admin/manage-users',
            actions: [
                { label: 'Adicionar', type: 'add', route: '/admin/manage-users/add' },
                { label: 'Editar', type: 'edit', route: '/admin/manage-users/edit' },
                { label: 'Deletar', type: 'delete', route: '/admin/manage-users/delete' }
            ]
        },
        {
            title: 'Gerenciar Página Principal',
            details: 'Editar a página inicial',
            route: '/admin/manage-home',
            actions: [
                { label: 'Editar', type: 'edit', route: '/admin/manage-home/edit' }
            ]
        },
        {
            title: 'Gerenciar categorias',
            details: 'Adicione, remova ou edite categorias',
            route: '/admin/manage-categories',
            actions: [
                { label: 'Adicionar', type: 'add', route: '/admin/manage-categories/add' },
                { label: 'Editar', type: 'edit', route: '/admin/manage-categories/edit' },
                { label: 'Deletar', type: 'delete', route: '/admin/manage-categories/delete' }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col mb-12">
            <div className="w-full h-[100px] flex items-center justify-center text-center font-bold lg:text-[50px] xs:text-[30px]">
                Bem-vind, {localStorage.getItem('username')}!
            </div>
            <div className="w-full sm:px-5 xs:px-2 flex flex-wrap gap-5 xs:h-full lg:h-[50vh] items-center justify-center">
                {options.map((option, index) => (
                    <AdminMenuOption
                        key={index}
                        icon={editIcon}
                        route={option.route}
                        title={option.title}
                        details={option.details}
                        actions={option.actions}
                    />
                ))}
            </div>
        </div>
    );
}
