import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => <h1>sidebar</h1>;
