import { shallow } from 'enzyme';
import { UserList, User } from '.';

const mockUser = {
	email: '',
	picture: { large: '' },
	registered: { date: '' },
	name: { first: '', last: '' },
	location: { street: { name: '', number: '' }, postcode: '', city: '', country: '' }
};

const mockUsersArray = [ mockUser, mockUser, mockUser, mockUser ];

describe('<UserList/>', () => {
	it('should show user info that there are no users to render', () => {
		const wrapper = shallow(<UserList data={[]} />);
		expect(wrapper.text().includes('No users')).toBe(true);
	});

	it('should return number of children User components toBe equal to data array length', () => {
		const wrapper = shallow(<UserList data={mockUsersArray} />);
		expect(wrapper.find(User).length).toBe(mockUsersArray.length);
	});
});
