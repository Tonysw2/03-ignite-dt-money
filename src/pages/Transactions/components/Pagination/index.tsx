import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContext } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { Button, PaginationContainer } from './styles'

export function Pagination() {
  const {
    totalTransactions,
    currentPage,
    goToPreviousPage,
    goToNextPage,
    changePage,
  } = useContext(TransactionsContext)
  const transactionsPerPage = 10
  const pageLimit = 3
  const pages = Math.ceil(totalTransactions / transactionsPerPage)
  const pagesToRender = pages > pageLimit ? pageLimit : pages

  console.log(totalTransactions)

  return (
    <PaginationContainer>
      <Button disabled={currentPage === 1} onClick={goToPreviousPage}>
        <CaretLeft size={24} weight="bold" />
      </Button>

      <ul>
        {Array.from({ length: pagesToRender }).map((_, index) => {
          return (
            <li key={index}>
              <button
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={changePage}
              >
                {index + 1}
              </button>
            </li>
          )
        })}
      </ul>

      <Button disabled={currentPage === pages} onClick={goToNextPage}>
        <CaretRight size={24} weight="bold" />
      </Button>
    </PaginationContainer>
  )
}
