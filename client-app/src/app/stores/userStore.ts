import { makeAutoObservable } from "mobx";
import { User, UserFormValuse } from "../models/user";
import agent from "../api/agent";
import { store } from "./store";
import { router } from "../router/Routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    /* 
        when user login in webapp:
        1) call login api
        2) receive a token, and save token in storage, and set current user
        3) redirect to list page
        4) close modal
    */
    login = async (creds:UserFormValuse) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            this.setUser(user);
            router.navigate('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    /** 
     * 1) register by call api
     * 2) set token
     * 3) redirect
     */
    register = async (creds:UserFormValuse) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            this.setUser(user);
            router.navigate('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate('/homepage');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            this.setUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    setUser = (user: User | null) => {
        this.user = user;
    }

    setImage = (image: string) => {
        if (this.user) this.user.image = image;
    }
}