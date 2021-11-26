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
		"icons": ["/assets/icon_optional_card_book_2.png", "/assets/icon_optional_card_book_1.png"],
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
		"icons": ["/assets/icon_stored_value_card_2.png", "/assets/icon_stored_value_card_1.png"],
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
		"icons": ["/assets/icon_holiday_gifts_2.png", "/assets/icon_holiday_gifts_1.png"],
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
		"icons": ["/assets/icon_enterprise_procurement_2.png", "/assets/icon_enterprise_procurement_1.png"],
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
                                            <img src={i.icons?.[1]} />
                                            <span>{i.name}</span>
                                            <span className="underline"></span>
                                        </div>
                                    );
                                }
                                else {
                                    return (
                                        <div className="item" key={i.id} onClick={() => handleChange(i.code)}>
                                            <img src={i.icons?.[0]} />
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