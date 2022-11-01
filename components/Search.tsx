import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import Input from 'antd/lib/input/Input';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { searchDataStart } from '../redux/user/user.slice';

type Props = {};

const SearchApp = (props: Props) => {
  const [searchText, setSearchText] = useState('');
  const { loading } = useAppSelector((state) => state.user);
  const router = useRouter();
  const dichpatch = useAppDispatch();
  const getSearchText = (e: string) => {
    setSearchText(e);
  };

  const handleSearch = () => {
    dichpatch(searchDataStart(searchText.trim()));
    router.push({ query: { search: searchText } });
  };

  return (
    <div className="search-box">
      <Row>
        <Col>
          <Input
            placeholder="Nhập Họ tên, email, số điện thoại, chức vụ,..."
            onChange={(e) => getSearchText(e.target.value)}
            value={searchText}
          ></Input>
        </Col>
        <Col>
          <Button className="btn--create" onClick={handleSearch} disabled={loading}>
            <SearchOutlined className="icon--default" />
            <span className="text">Tìm kiếm</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchApp;
