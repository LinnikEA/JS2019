interface MyObject {
	a: number;
	b: string;
	c: boolean;
}

const obj: MyObject = {
	a: 3,
	b: 'label',
	c: false
};

const checkObject = (obj: MyObject) => {
	return obj.a;
};

checkObject(obj);