import nbp from '@/services/nbp';
import { useEffect } from 'react';
import './index.less';

interface ShopHeaderProps {
    logos?: string[];
    miniIcon?: string;
    categories?: any[];
    current?: string;
}

const ShopHeader = (props: ShopHeaderProps) => {
    const { logos, miniIcon, categories, current } = props;

    const categoriesList =  [{
		"parent": null,
		"level": 1,
		"provider": "P",
		"code": "11",
		"name": "自选卡册",
		"fullName": "自选卡册",
		"isActive": true,
		"icons": ["93e40b70948a407f856edc3cffa32373", "f16d9b81999f4fa29df7a3cbad3f1ce0"],
		"externalCode": null,
		"id": "c0fa449c-d761-8660-7bf1-39fd0853e42e",
		"extraProperties": {}
	}, {
		"parent": null,
		"level": 1,
		"provider": "P",
		"code": "12",
		"name": "储值卡",
		"fullName": "储值卡",
		"isActive": true,
		"icons": ["b8174b6c82e3467db1b8e32039832f31", "c2b42671126143aa8f9f695510bd76bb"],
		"externalCode": null,
		"id": "70ddc07d-762c-05a3-2190-39fd08540c14",
		"extraProperties": {}
	}, {
		"parent": null,
		"level": 1,
		"provider": "P",
		"code": "13",
		"name": "节日礼品",
		"fullName": "节日礼品",
		"isActive": true,
		"icons": ["96f2e069494444b5805dee4200fc088d", "0c52444f823a4397818181f8ff6f219f"],
		"externalCode": null,
		"id": "9a3f94e7-7eb3-16f9-d099-39fd0854300e",
		"extraProperties": {}
	}, {
		"parent": null,
		"level": 1,
		"provider": "P",
		"code": "14",
		"name": "企业采购",
		"fullName": "企业采购",
		"isActive": true,
		"icons": ["eac9580b03164611b102b4a602f4116f", "758e7ad7f4a74fe38c78c2474082c266"],
		"externalCode": null,
		"id": "0c80a986-3304-b8a9-c755-39fd0854539c",
		"extraProperties": {}
	}]

    useEffect(() => {
    }, [logos, miniIcon, categories, current]);

    const handleChange = (category: any) => {
        window.location.href = `/product/list/${category}/1`;
    }

    return (
        <header className="shopheader">
            <div className="container">
                <div className="left">
                    <a href="/" className="logo"><img src="/assets/icon-shop-logo-01.png" /></a>
                    <nav className="navs">
                        {
                            categoriesList?.map((i: any) => {
                                if (current === i.code) {
                                    return (
                                        <div className="itemActive" key={i.id}>
                                            <img src={nbp.request.mediaUrl(i.icons?.[1])} />
                                            <span>{i.name}</span>
                                            <span className="underline"></span>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className="item" key={i.id} onClick={() => handleChange(i.code)}>
                                            <img src={nbp.request.mediaUrl(i.icons?.[0])} />
                                            <span>{i.name}</span>
                                        </div>
                                    );
                                }
                            })
                        }
                    </nav>
                </div>
                <div className="right">
                    <div className="button">
                        <img src="/assets/icon-xcx-01.svg" />
                        <span>小程序</span>
                    </div>
                    <div className="drop">
                        <img src={miniIcon} />
                        <span>微信扫一扫体验</span>
                    </div>
                </div>
            </div>
        </header>
    );;
}

export default ShopHeader;