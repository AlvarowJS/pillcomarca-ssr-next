import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    from: number;
    to: number;
    total: number;
}

export const Pagination = ({ 
    currentPage, 
    totalPages, 
    onPageChange, 
    from, 
    to, 
    total 
}: PaginationProps) => {
    // Función para generar números de página visibles
    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisible = 5; // Máximo de páginas visibles en la paginación
        
        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);
        
        // Ajustar si no estamos mostrando suficientes páginas
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        
        // Página inicial
        if (start > 1) {
            visiblePages.push(1);
            if (start > 2) {
                visiblePages.push('...');
            }
        }
        
        // Páginas intermedias
        for (let i = start; i <= end; i++) {
            if (i > 0 && i <= totalPages) {
                visiblePages.push(i);
            }
        }
        
        // Página final
        if (end < totalPages) {
            if (end < totalPages - 1) {
                visiblePages.push('...');
            }
            visiblePages.push(totalPages);
        }
        
        return visiblePages;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                    Anterior
                </button>
                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div>
            
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Mostrando de <span className="font-medium">{from}</span> a <span className="font-medium">{to}</span> de <span className="font-medium">{total}</span> resultados
                    </p>
                </div>
                
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                        >
                            <span className="sr-only">Anterior</span>
                            <FaArrowLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        
                        {getVisiblePages().map((page, index) => (
                            page === '...' ? (
                                <span key={index} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={index}
                                    onClick={() => onPageChange(page as number)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page ? 'z-10 bg-blue-700 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
                                >
                                    {page}
                                </button>
                            )
                        ))}
                        
                        <button
                            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                        >
                            <span className="sr-only">Siguiente</span>
                            <FaArrowRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};