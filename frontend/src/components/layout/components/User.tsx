import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from '@nextui-org/react';

const UserMenu: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
                        }}
                        className="transition-transform"
                        description="Cliente"
                        name="Tony Reichert"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="settings">Mi Perfil</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Cerrar Sesión
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default UserMenu;
