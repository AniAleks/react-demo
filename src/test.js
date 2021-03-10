import toastr from 'toastr';

export function _addCandidate(status) {
  if (status === 409) {
    return toastr.warning('The candidate  is already exists in list.');
  } if (status === 200) {
    return toastr.success('The candidate created successfully');
  }
}

export function _deleteCandidate(status) {
  if (status === 409) {
    return toastr.warning('The candidate information is not found');
  } if (status === 200) {
    return toastr.success('The candidate deleted successfully');
  }
}

export function _getCandidatesList(status) {
  if (status === 409) {
    return toastr.warning('There are no candidates in the list.');
  } if (status === 200) {
    return toastr.success('Candidates list created successfully');
  }
}

export function _updateCandidateData(status) {
  if (status === 409) {
    return toastr.warning('The candidate  is already exists in list.');
  } if (status === 200) {
    return toastr.success('Candidate created successfully');
  }
}
