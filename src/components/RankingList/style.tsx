import styled from 'styled-components';

export const Message = styled.div`
  width: 100%;
  background: var(--bg-0);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  background: var(--bg-0);
  color: #fff;
  border-radius: 5px;
  font-size: 1.1rem;
  overflow-x: scroll;
  min-width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: 6px 10px;
    align: middle;
    border: 1px solid var(--bg-1);
    text-align: center;
    white-space: nowrap;

    svg {
      font-size: 2rem;
    }
  }

  tbody tr {
    opacity: 0.9;
  }

  tr:first-child th {
    border-top: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:first-child,
  tr th:first-child {
    border-left: 0;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 0;
  }

  tbody tr td:nth-of-type(1) {
    position: relative;
    top: 0;
    left: 0;

    span {
      position: absolute;
      width: 100%;
      top: 8px;
      left: 0;
      font-size: 12px;
    }
  }

  tbody tr:nth-of-type(1) td:nth-of-type(1) {
    color: #ffd700;
  }

  tbody tr:nth-of-type(2) td:nth-of-type(1) {
    color: #808080;
  }

  tbody tr:nth-of-type(3) td:nth-of-type(1) {
    color: #c77b30;
  }

  tbody tr:hover {
    opacity: 1;
  }
`;
